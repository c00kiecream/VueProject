<template>
    <main class="mt-5" style="color: #1C2474">
        <div class="container">
            <h2>리뷰 등록</h2>
            <h4 class="mt-5">음식은 만족 하셨나요?</h4>
            <div class="star-rating space-x-4 mx-auto">
<input type="radio" id="5-stars" name="rating" value="5" />
<label for="5-stars" class="star pr-4">★</label>
<input type="radio" id="4-stars" name="rating" value="4" />
<label for="4-stars" class="star">★</label>
<input type="radio" id="3-stars" name="rating" value="3" />
<label for="3-stars" class="star">★</label>
<input type="radio" id="2-stars" name="rating" value="2" />
<label for="2-stars" class="star">★</label>
<input type="radio" id="1-star" name="rating" value="1" />
<label for="1-star" class="star">★</label>
</div>
<h4 class="mt-5">어떤 점이 좋았나요?</h4>
                <div>
                    <div class="mb-3 row">
                    <label for="exampleFormControlTextarea1" class="form-label"></label>
                    <div class="col-md-9"></div>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                </div>
                <h4 class="mt-5">사진을 올려주세요 😊</h4>
                <div class="mb-5 mt-5 row">
                <label class="col-md-3 col-form-label">상품 이미지</label>
                <div class="col-md-9">
                    <input class="form-control" type="file" accept="image/png, image/jpeg">
                      <div class="alert alert-secondary" role="alert">
                       <ul>
                          <li>이미지사이즈 : 350*350</li>
                          <li>파일 사이즈 : 1M 이하</li>
                          <li>파일 확장자 : png, jpg만 가능</li>
                       </ul>
                      </div>
                    </div>
                    <button type="button" class="mt-5 btn btn-outline-light btn-md"
                    style="color: #1C2474; border:1px solid #1C2474;">리뷰 등록</button>
                </div>
              </div>
            </main>
</template>
<style scoped>
.star-rating {
  display: flex;
  flex-direction: row-reverse;
  font-size: 2.25rem;
  line-height: 2.5rem;
  justify-content: space-around;
  padding: 0 0.2em;
  text-align: center;
  width: 5em;
}
.star-rating input {
  display: none;
}
.star-rating label {
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2.3px;
  -webkit-text-stroke-color: #2b2a29;
  cursor: pointer;
}
.star-rating :checked ~ label {
  -webkit-text-fill-color: gold;
}
.star-rating label:hover,
.star-rating label:hover ~ label {
  -webkit-text-fill-color: #fff58c;
}
</style>
