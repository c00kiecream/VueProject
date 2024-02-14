const express = require('express');
const app = express();
const session = require('express-session');
const fs = require('fs');
const cors = require('cors');

let corsOption = {
    origin: 'http://localhost:8080',
    credentials: true
}

app.use(cors(corsOption))

app.use(session({
    secret: 'secret code',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60
    }
}));

app.use(express.json({
    limit: '50mb'
}));

const server = app.listen(3000, () => {
    console.log('Server started port 3000.');
});

const db = {
    database: "team_project",
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "1234" 
}

let sql = require('./sql');

fs.watchFile(__dirname + '/sql.js',(curr, prev) => {
    console.log('sql 변경시 재시작 없이 반영되도록 함');
    delete require.cache[require.resolve('./sql.js')];
    sql = require('./sql.js');
});

const dbPool = require('mysql').createPool(db);

app.post('/api/login', async (request, res) => {
    try {
      const result = await req.db('login', request.body.param) // 파라미터 값과 일치하는 데이터 불러오기
      if (result.length > 0) {
        // 향상된 for문 | request.body.param[0] key
        for(let key in request.body.param[0]) request.session[key] = request.body.param[0][key]
        res.cookie('sessionID', request.sessionID) //세션ID를 쿠키에 저장
        res.send(request.body.param[0])
      } else {
        res.send({
          // 일치하는 값이 없을 때
          error: '로그인 정보를 확인해주세요.'
        })
        console.log('로그인정보를 확인해주세요.', error)
      }
    } catch (err) {
      res.send({
        error: "DB access error"
      })
    }
  })

app.post('/api/logout', async(request, res) => {
    request.session.destroy();
    res.send('로그 아웃 성공');
});

app.get('api/check-session', (request, res) => {
    if (request.session && request.session.user) {
      res.send({ loggedIn: true, user: request.session.user })
    } else {
      res.send({ loggedIn: false })
    }
  });
app.post('/upload/:productId/:type/:fileName', async (request, res) => {

	let {      //여러개의 변수를 배열 형식을 이용해서 선언했다.
        productId,
        type,
        fileName
	} = request.params;   //3개의 변수에 동일한 데이터를 입력한다.
	const dir = `${__dirname}/uploads/${productId}`;
	console.log('dir',dir);
	const file = `${dir}/${fileName}`;
	if (!request.body.data) return fs.unlink(file, async (err) => res.send({
	  err
	}));
	const data = request.body.data.slice(request.body.data.indexOf(';base64,') + 8);
	if (!fs.existsSync(dir)) fs.mkdirSync(dir);            //폴더가 없으면 폴더를 생성해주는 코드
	fs.writeFile(file, data, 'base64', async (error) => {                  // 그리고 파일을 기록하도록 합니다.
	  await req.db('productImageInsert', [{
		product_id: productId,
		type: type,
		path: fileName
	  }]);
  
	  if (error) {
		res.send({
		  error
		});
	  } else {
		res.send("ok");
	  }
	});
  });

  app.get('/download/:productId/:fileName', (request, res) => {
	const {
	  productId,
	  type,
	  fileName
	} = request.params;
	const filepath = `${__dirname}/uploads/${productId}/${fileName}`;
	console.log(filepath);
	res.header('Content-Type', `image/${fileName.substring(fileName.lastIndexOf("."))}`);
   if (!fs.existsSync(filepath)) res.status(404).send({
	  error: 'Can not found file.'
   });
	else fs.createReadStream(filepath).pipe(res);
  });
app.post('/apirole/:alias', async(request, res) => {
    if(!request.session.email) {
        return res.status(401).send({
            error:'You need to login'
        });
    }
    try{
        res.send(await req.db(request.params.alias));
    }catch (err) {
        res.status(500).send({
            error: ReferenceError
        })
    }
});

app.post('/api/:alias', async(request, res) => {
    try{
        res.send(await req.db(request.params.alias, request.body.param));
    }catch (err) {
        res.status(500).send({
            error: ReferenceError
        })
    }
});

const req = {
    async db(alias, param = [], where='') {
        return new Promise((resolve, reject) => 
        dbPool.query(sql[alias].query + where, param,
    (error, rows) => {
        if (error) {
            if (error.code != 'ER_DUP_ENTRY')
            console.log(error);
        resolve({
            error
        });
      } else resolve(rows);
     }));
   }
};