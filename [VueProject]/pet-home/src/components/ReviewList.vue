<template>

  <div class="container">

    <table class="table mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">상품</th>
          <th scope="col">상품 이름</th>
          <th scope="col">제목</th>
          <th scope="col">글쓴이</th>
          <th scope="col">등록일</th>
          <th scope="col">평점</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">15</th>
          <td>이미지</td>
          <td>NERDOG PIZZA</td>
          <td>케이크는 잘 안먹어서 피자로 생일파티 했어용</td>
          <td>감**</td>
          <td>2023.07.16</td>
          <td>★★★★★</td>
        </tr>
        <tr>
          <th scope="row">15</th>
          <td>이미지</td>
          <td>NERDOG PIZZA</td>
          <td>케이크는 잘 안먹어서 피자로 생일파티 했어용</td>
          <td>감**</td>
          <td>2023.07.16</td>
          <td>★★★★★</td>
        </tr>
        <tr>
          <th scope="row">15</th>
          <td>이미지</td>
          <td>NERDOG PIZZA</td>
          <td>케이크는 잘 안먹어서 피자로 생일파티 했어용</td>
          <td>감**</td>
          <td>2023.07.16</td>
          <td>★★★★★</td>
        </tr>
        <tr>
          <th scope="row">15</th>
          <td>이미지</td>
          <td>NERDOG PIZZA</td>
          <td>케이크는 잘 안먹어서 피자로 생일파티 했어용</td>
          <td>감**</td>
          <td>2023.07.16</td>
          <td>★★★★★</td>
        </tr>
        <tr>
          <th scope="row">15</th>
          <td>이미지</td>
          <td>NERDOG PIZZA</td>
          <td>케이크는 잘 안먹어서 피자로 생일파티 했어용</td>
          <td>감**</td>
          <td>2023.07.16</td>
          <td>★★★★★</td>
        </tr>
      </tbody>
    </table>

    <!-- 검색창 -->
    <div class="row">

      <div class="row mb-3">
        <div class="col-auto">
          <input type="text" class="form-control">
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary" style="background-color: #1C2474;">검색</button>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary float-right" style="background-color: #1C2474;">후기 쓰기</button>
        </div>
      </div>

    </div>

    <div class="row">
      <nav>
        <ul class="pagination pagination-md justify-content-center">
          <li class="page-item active">
            <span class="page-link">1</span>
          </li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
        </ul>
      </nav>
    </div>

  </div>

</template>

<script>
</script>
