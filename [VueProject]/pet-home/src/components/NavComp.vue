<template>
    <nav class="navbar navbar-expand-lg navbar-dark"  style="background-color: #1C2474;">
        <div class="container-fluid">
          <router-link to="/">숑블리</router-link>
          <!-- <a class="navbar-brand" href="#">숑블리</a> -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                 <router-link class="nav-link" aria-current="page" to="/list">List</router-link>
                <!-- <a class="nav-link disabled" aria-disabled="true">List</a> -->
              </li>              
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="/management">제품관리</router-link>
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link" href="#">MENU</a>
              </li> -->

            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">검색</button>
            </form>
          </div>
        </div>
      </nav>  
</template>
