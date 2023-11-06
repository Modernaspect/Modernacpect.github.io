function makeNoti() {
  // 사용자 응답에 따라 단추를 보이거나 숨기도록 설정
  if (Notification.permission === "denied" || Notification.permission === "default") {
    alert("알림이 차단된 상태입니다. 알림 권한을 허용해주세요.");
    askNotificationPermission()
  } else {

    let notification = new Notification("test", { // "test" => 제목
      body: "테스트용 알림입니다.", // 메세지
      icon: "asd 2023-09-13 172043.png", // 아이콘
      requireInteraction: true,
    });

    //알림 클릭 시 이벤트
    notification.addEventListener("click", () => {
      window.open('https://www.naver.com/');
    });

  }
}

function askNotificationPermission() {
  console.log("권한 묻기");
  // 권한을 실제로 요구하는 함수
  Notification.requestPermission(function (permission) {
    // If the user accepts, let's create a notification
    if (permission === "granted") {
      var notification = new Notification("Hi there!");
    }
  });

  // 브라우저가 알림을 지원하는지 확인
  if (!("Notification" in window)) {
    console.log("이 브라우저는 알림을 지원하지 않습니다.");
  }
}

function checkNotificationPromise() {
  try {
    Notification.requestPermission().then();
  } catch (e) {
    return false;
  }

  return true;
}