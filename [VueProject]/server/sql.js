module.exports = {
    productList1 : {
        query: `select t1.*, substr(cereate_date, 1,10) as date
        from t_review t1`
    },
    productList: {
		query: `select t1.*, t2.path, t3.category1, t3.category2 
		from m_product t1, t_image t2, m_category t3
		where t1.id = t2.product_id and t2.type = 4 and t1.category_id = t3.id`
		},
    userList: {
      query:`select t1.* from user t1`
    },
    petList: {
      query: `select t1.*, t2.path, t3.category1, t3.category2 
      from m_product t1, t_image t2, m_category t3
      where t1.id = t2.product_id 
        and t2.type = 4 
        and t1.category_id = t3.id
        and t1.category_id in (4, 5, 6)`
      },
      peopleList: {
        query: `select t1.*, t2.path, t3.category1, t3.category2 
        from m_product t1, t_image t2, m_category t3
        where t1.id = t2.product_id 
          and t2.type = 4 
          and t1.category_id = t3.id
          and t1.category_id in (1, 2, 3)`
        },
    productList3: {
			query: `select t1.*, t2.category1, t2.category2,from t_product t1, t_category t2 
			where t1.id = ? and t1.category_id = t2.id`
			},	
    productInsert: {
        query: `insert into t_review set ?`
    },
    productInsert1: {
        query: `insert into t_list set ?`
    },
    m_productInsert: {
        query: `insert into m_product set ?`
    },
    register: {
        query: `insert into user set ?`
    },
    productImageInsert: {
        query: `insert into t_image set ?`
    },
    productReview : {
        query: `SELECT *, substr(create_date, 1,10) as date FROM t_list`
    },
    productReview1 : {
        query: `SELECT t1.*, SUBSTR(t1.create_date, 1,10) AS date, t2.*
        FROM t_review t1 
        JOIN t_list t3 ON t1.id = t3.id
        LEFT JOIN t_image t2 ON t3.id = t2.product_id AND t2.type IN (1,2,3)
        WHERE t3.id = ?`
    },
    imageList: {
      query: `select * from t_image where product_id = ?`
    },
    productDetail2: {
        query: `select  t1.*
        from t_review t1
        where t1.id = ?` 	
        },
        productDetail3: {
          query: `select  t1.*
          from m_product t1
          where t1.id = ?` 
        },    
        imageDelete: {
        query: `delete from t_image where id=?`
        },
    productImageInsert: {
		query: `insert into t_image set ?`
	  },
      lastId: {
        query: `SELECT id FROM t_review ORDER BY id DESC LIMIT 1`
      },
      productDelete: {
        query: `delete from m_product where id = ?`
      },
      productList2: {
		query: `select t3.*, t4.path from (select t1.*, t2.category1, t2.category2 
		  from m_product t1, m_category t2
		  where t1.category_id = t2.id) t3
		  left join (select * from t_image where type=4) t4
		  on t3.id = t4.product_id`
	},
      m_productDetail2: {
        query: `select  t1.*
          from m_product t1
          where t1.id = ?` 	
    },
      m_imageList: {
        query: `select * from t_image where product_id = ?`
    },
    m_imageDelete: {
    query: `delete from t_image where id=?`
    },
    productUpdate: {
      query: `update m_product set product_name='?',product_price=?,tags='?',category_id=? 
              where id = ?`
      },
      storeList: {
        query: `SELECT *, substr(address, 1, 2) as region FROM store`
      },
      storeLocation: {
        query: `SELECT DISTINCT substr(address, 1, 2) as region FROM store`
      },
      userList: {
        query: `SELECT * FROM user`
      },
      login: {
        query: 'SELECT * FROM user WHERE email=? AND password=?'
      },
      // 이랑 SQL
      e_productList: { //productList
        query: `select s1.*, s2.path
        from s_product s1, t_image s2 
        where s1.id = s2.product_id and s2.type= 7;`
      },
      e_productDetail: { // 상세페이지
        query: `select s1.* , s2.path, s2.type, s3.category1, s3.category2, s3.category3
        from s_product s1, t_image s2, s_category s3
        where s1.id = ? and s1.id = s2.product_id and s2.type = 9 and s1.category_id = s3.id;`
      },
      e_productMainImages: { // 상세페이지 캐러셀이미지 
        query: `select * from t_image where product_id = ? and type = 8`
      },
      e_productInsert: { // 제품등록
        query: `insert into s_product set ?`
      },
      e_priceInsert: {
        query: `insert into s_price set ?`
      }, 
      e_productList3: {
        query: 
        `SELECT s1.*, s2.path, s2.type, COALESCE(s3.price, 0) AS price
        FROM s_product s1
        LEFT JOIN t_image s2 ON s1.id = s2.product_id AND s2.type = 7
        LEFT JOIN s_price s3 ON s1.id = s3.product_id` 
      },
      e_productOrderInsert: { // 주문등록
        query: `INSERT INTO s_orders (product_id, product_name, temp, cup, pickup, order_price) VALUES (?, ?, ?, ?, ?, ?)`
      },
      e_productInsertimage: { // 이미지등록 
		    query: `insert into t_image set ?`
	    },
      e_productList2: { // 주문확인 마지막 등록된 아이디 나오게... orderby 1
        query: `SELECT 
        s1.*,
        s2.path,
        CASE s1.temp
            WHEN 1 THEN 'hot'
            WHEN 2 THEN 'ice'
            ELSE 'unknown'
        END AS temp_description,
        CASE s1.cup
            WHEN 1 THEN '매장컵'
            WHEN 2 THEN '일회용컵'
            ELSE 'unknown'
        END AS cup_description,
        CASE s1.pickup
            WHEN 1 THEN '매장이용'
            WHEN 2 THEN 'Togo'
            WHEN 3 THEN '딜리버스'
            ELSE 'unknown'
        END AS pickup_description
        FROM (
        SELECT *
        FROM s_orders
        ORDER BY id DESC
        LIMIT 1
    ) s1
    LEFT JOIN t_image s2 ON s1.product_id = s2.product_id AND s2.type = 7;`
    },
    e_productDetail2: { // 제품등록
        query: `select s1.* from s_product s1 where s1.id = ?;`
    },
    e_imageList: { // 사진등록
        query: `select * from t_image where product_id = ?;`
    },
    e_imageDelete: { // 사진삭제
		    query: `delete from t_image where id=?`
	  },
    e_productDelete: { // 제품삭제
        query: `delete from s_product where id = ?`
    }
}
