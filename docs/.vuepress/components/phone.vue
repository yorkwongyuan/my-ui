<template>
    <div id="phone">
      <div id="sxt"></div>
      <div id="tingtong"></div>
      <div id="screen">
      <iframe :src="path">
      </iframe>
      </div>
      <div id="btn"></div>
    </div>
 
</template>
<script>
export default {
  name: 'phone',
  props: ['path']
}
</script>
<style lang="scss">
#phone {
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  // width: 250px;
  // height: 500px;
  // width: 375px;
  // height: 667px;
  width: fit-content;
  height: fit-content;
  background: #2E2E2E;
  border: 10px solid #3B3B3B;
  // margin: 100px auto;
  border-radius: 40px;
}
#sxt{
  width: 6px;
  height: 6px;
  background: #1A1A1A;
  border-radius: 50%;
  border: 3px solid #505050;
  margin: 10px auto;
}

#tingtong{
  width: 80px;
  height: 9px;
  border: 3px solid #505050;
  background: #1A1A1A;
  margin: 10px auto;
  border-radius: 10px;
}

#screen{
  // width: 230px;
  // height: 390px;
  width: 375px;
  height: 667px;
  background: #0A0A0A;
  border: 3px solid #1C1C1C;
  margin: 10px auto;
}

#btn{
  width: 25px;
  height: 25px;
  background: #1A1A1A;
  border-radius: 50%;
  margin: 10px auto;
}

#btn:before{
  width: 15px;
  height: 15px;
  border: 2px solid white;
  border-radius: 30%;
  display: inline-block;
  content: "";
  margin-top: 3px;
  margin-left: 3px;
}
</style>