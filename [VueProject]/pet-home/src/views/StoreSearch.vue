<template>
  <div class="mapContainer">

    <div id="map"></div>

    <div id="infobarWrap">
      <div class="infobar">

        <div class="d-flex flex-column align-items-stretch" style="width:100%;">

          <!-- area filter -->
          <select v-model="selectedRegion" class="form-select mb-3" style="border-radius:0; border:none;">
            <option value="" selected>지역 선택</option>
            <option v-for="(region, i) in storeLocation" :key="i" :value="region.region">{{ region.region }}</option>
          </select>

          <!-- store infobox / v-for 리스트 렌더링 -->
          <div :key="i" v-for="(store, i) in filteredStoreList" class="list-group list-group-flush border-bottom scrollarea" @click="move(store)">
            <div class="list-group-item list-group-item-action py-3 lh-sm mb-1">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <h4 class="mb-2">{{ store.branch }}</h4>
              </div>
              <p class="text-start">{{ store.address }}</p>
              <p class="text-start">{{ store.tel }}</p>
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  name: 'StorePage3',
  data () {
    return {
      map: null,
      selectedRegion: '',
      storeList: [],
      storeLocation: [],
      currentOverlay: null,
      markerImageSrc: require('@/assets/marker2.png')
    }
  },
  created () {
    this.getStoreList();
    this.getStoreLocation();
  },
  mounted () {
    if (window.kakao && window.kakao.maps) {
      this.loadMap()
    } else {
      this.loadScript()
    }
  },
  computed: {
    filteredStoreList () {
      if (this.selectedRegion === '') {
        return this.storeList;
      } else {
        return this.storeList.filter(store => store.region === this.selectedRegion);
      }
    }
  },
  watch: {
    selectedRegion: function(newRegion, oldRegion) {
      console.log('Selected region changed: ', newRegion);

      // 필터된 지역 리스트의 첫번째 매장 위치 정보 지정
      const firstStoreInRegion = this.filteredStoreList[0]

      if (firstStoreInRegion) {
        const centerPosition = new window.kakao.maps.LatLng(firstStoreInRegion.latitude, firstStoreInRegion.longtitude)
        this.map.setCenter(centerPosition)
      }
    }
  },
  methods: {
    async getStoreList () {
      this.storeList = await this.$api('/api/storeList', {})
      console.log(this.storeList)
    },
    async getStoreLocation () {
      this.storeLocation = await this.$api('/api/storeLocation', {})
    },
    loadScript () {
      const script = document.createElement('script');
      script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=541ec0669b1cb977298d3b805cd44ec0&autoload=false';
      script.onload = () => {
        window.kakao.maps.load(this.loadMap)
      }
      document.head.appendChild(script)
    },
    loadMap () {
      // 맵 띄우기
      const container = document.getElementById('map');
      let options = {
        center: new window.kakao.maps.LatLng(37.57065, 127.015000),
        level: 6
      };
      this.map = new window.kakao.maps.Map(container, options);

      // 확대축소 컨트롤 추가
      const zoomControl = new window.kakao.maps.ZoomControl();
      this.map.addControl(zoomControl, window.kakao.maps.ControlPosition.TOPLEFT);

      // loadMarker 실행
      this.loadMarker();
    },
    loadMarker () {
      const markerPositions = [];

      // storeList 각 매장의 latitude와 longtitude를 markerPositions 배열에 추가
      this.storeList.forEach (store => {
        const position = new window.kakao.maps.LatLng(store.latitude, store.longtitude); // position에 카카오맵 위도,경도 입력한 LatLng 객체 저장
        markerPositions.push(position);
      });

      // position별 마커 생성
      markerPositions.forEach ((position, i) => {
        const marker = new window.kakao.maps.Marker({
          position: position,
          image: new window.kakao.maps.MarkerImage(this.markerImageSrc, new window.kakao.maps.Size(58, 84))
        });

        // 마커 클릭 이벤트 생성
        window.kakao.maps.event.addListener(marker, 'click', () => {
          // 이전 커스텀 오버레이 닫기
          if (this.currentOverlay) {
            this.currentOverlay.setMap(null);
          }

          // 오버레이 생성 및 스타일 지정
          const overlayContent = document.createElement('div');
          overlayContent.className = 'custom-overlay-content';
          overlayContent.innerHTML = `<div class="info-header">${this.storeList[i].branch}</div>`;

          overlayContent.style.backgroundColor = '#1C2474';
          overlayContent.style.width = 'auto';
          overlayContent.style.padding = '6px 16px';
          overlayContent.style.borderRadius = '30px';
          overlayContent.style.fontSize = '1.2rem';
          overlayContent.style.fontWeight = '800';
          overlayContent.style.color = '#FFFFFF';

          // 오버레이 객체 생성(클릭 시 매장명)
          const overlay = new window.kakao.maps.CustomOverlay({
            content: overlayContent,
            position: marker.getPosition(),
            xAnchor: 0.5,
            yAnchor: -0.1
          });

          // 오버레이 맵에 셋팅
          overlay.setMap(this.map);
            this.currentOverlay = overlay;
          });

          // 마커 맵에 셋팅
          marker.setMap(this.map);
      });
    },
    move (store) {
      // store의 위도경도를 전달하여 kakao LatLng 객체 생성
      const position = new window.kakao.maps.LatLng(store.latitude, store.longtitude);
      this.map.setCenter(position);

      // 아래는 loadMarker() 에서 정의한 커스텀 오버레이 생성과 동일
      // 이전 커스텀 오버레이 닫기
      if (this.currentOverlay) {
        this.currentOverlay.setMap(null);
      }

      // 커스텀 오버레이 생성 및 스타일 지정
      const overlayContent = document.createElement('div');
      overlayContent.className = 'custom-overlay-content';
      overlayContent.innerHTML = `<div class="info-header">${store.branch}</div>`;

      overlayContent.style.backgroundColor = '#1C2474';
      overlayContent.style.width = 'auto';
      overlayContent.style.padding = '6px 16px';
      overlayContent.style.borderRadius = '30px';
      overlayContent.style.fontSize = '1.2rem';
      overlayContent.style.fontWeight = '800';
      overlayContent.style.color = '#FFFFFF';

      this.currentOverlay = new window.kakao.maps.CustomOverlay({
        content: overlayContent,
        position: position,
        xAnchor: 0.5,
        yAnchor: 0
      });

      this.currentOverlay.setMap(this.map);
    }
  }
}

</script>

<style scoped>
.mapContainer {
  position: relative;
  width: 100%;
  height: 92vh;
}
#map {
  float: left;
  width: 79%;
  height: 100%;
  z-index: 0;
}
/* infobar 스타일 */
#infobarWrap {
  position: absolute;
  right: 0;
  min-width: 400px;
  height: 100%;
  overflow: scroll;
  z-index: 1;
  background-color: #eee;
  border: #333 1px solid;
}
.infobar {
  margin: 0 auto;
  padding: 16px;
}
#infobar .list-group {
  height: 100%;
  margin-bottom: 2%;
}
/* 텍스트 스타일 */
h4 {
  color: #333;
  font-weight: 800;
  margin-bottom: 0.15rem;
}
p {
  font-size: 0.9rem;
  margin-bottom: 0.15rem;
}
/* 커스텀 오버레이 스타일 */
.custom-info-window {
  width: auto;
  padding: 0;
}
.info-header {
  margin: 0;
  text-align: center;
}
</style>
