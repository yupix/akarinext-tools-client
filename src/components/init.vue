<script>
export default {
  toast_notification(swal, content) {
    return new Promise(function(resolve) {
      swal({
        title: content["title"],
        icon: content["icon"],
        text: content["text"],
        toast: true,
        position: "top-end", //画面右上
        showConfirmButton: false,
        timer: 3000 //3秒経過後に閉じる
      }).then(() => {
        resolve();
      });
    });
  }
};
</script>
