<template>
  <div class="main-pre-loader">
    <div class="main-pre-loader-wrapper">
      <div class="main-pre-loader-wrapper-sphere second"></div>
      <div class="main-pre-loader-wrapper-sphere second"></div>
      <div class="main-pre-loader-wrapper-sphere third"></div>
      <div class="main-pre-loader-wrapper-sphere first"></div>
      <div class="main-pre-loader-wrapper-sphere third"></div>
      <div class="main-pre-loader-wrapper-sphere first"></div>
      <div class="main-pre-loader-wrapper-sphere four"></div>
      <div class="main-pre-loader-wrapper-sphere four"></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'LoaderAnimation'
}
</script>

<style lang='scss'>
  html,*,body{
    margin: 0 0;
    padding: 0 0;
    box-sizing: border-box;
  }
  .first,.second,.third,.four{
    background:black;
  }
  .first{
    animation:activecolorfirst 2s linear infinite;
  }
  .second{
    animation:activecolorsecond 2s linear infinite;
  }
  .third{
    animation:activecolorthird 2s linear infinite;
  }
  .four{
    animation:activecolorfour 2s linear infinite;
  }
  .main-pre-loader{
    height:120px;
    width:120px;
    background: #f4f4f4f4;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    &-wrapper{
      height:100px;
      width:100px;
      // border:2px solid black;
      &-sphere{
        height:10px;
        width:10px;
        background:black;
        margin:.1rem;
        border-radius: 50%;
      }
      &-sphere:nth-child(1){
        transform:translate(20px,-7.5px);
      }
      &-sphere:nth-child(2){
        transform:translate(60px,-18.7px);
      }
      &-sphere:nth-child(3){
        transform:translate(-7.5px);
      }
      &-sphere:nth-child(4){
        transform:translate(90.5px,-11.7px);
      }
      &-sphere:nth-child(5){
        transform:translate(-7.5px,8px);
      }
      &-sphere:nth-child(6){
        transform:translate(90.5px,-3.5px);
      }
      &-sphere:nth-child(7){
        transform:translate(60px,20.5px);
      }
      &-sphere:nth-child(8){
        transform:translate(20px,9px);
      }
     @keyframes rotate{
       100%{
         transform:rotate(360deg);
       }
     }
     @keyframes activecolorfirst{
       0%{
         background:black;
       }
       25%{
         background:#f4f4f4f4;
       }
       50%{
         background:#f4f4f4f4;
       }
       75%{
         background:#f4f4f4f4;
       }
       100%{
         background: black;;
       }
     }
     @keyframes activecolorsecond{
       0%{
         background:#f4f4f4f4;
       }
       25%{
         background:black;
       }
       50%{
         background:#f4f4f4f4;
       }
       75%{
         background:#f4f4f4f4;
       }
       100%{
         background:#f4f4f4f4;
       }
     }
     @keyframes activecolorthird{
       0%{
         background:#f4f4f4f4;
       }
       25%{
         background:#f4f4f4f4;
       }
       50%{
         background:black;
       }
       75%{
         background:#f4f4f4f4;
       }
       100%{
         background:#f4f4f4f4;
       }
     }
     @keyframes activecolorfour{
       0%{
         background:#f4f4f4f4;
       }
       25%{
         background:#f4f4f4f4;
       }
       50%{
         background:#f4f4f4f4;
       }
       75%{
         background:black;
       }
       100%{
         background:#f4f4f4f4;
       }
     }
     @-moz-keyframes rotate{
       100%{
         transform:rotate(360deg);
       }
     }
     @-webkit-keyframes rotate{
       100%{
         transform:rotate(360deg);
       }
     }
     @-ms-keyframes rotate{
       100%{
         transform:rotate(360deg);
       }
     } 
    
    }
    
  }
</style>