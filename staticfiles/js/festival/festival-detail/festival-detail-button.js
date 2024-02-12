// 왼쪽 버튼 요소와 오른쪽 버튼 요소를 가져옵니다.
const leftButton = document.querySelector(".main-festival-button-left");
const rightButton = document.querySelector(".main-festival-button-right");

// 숫자 버튼 요소들을 가져옵니다.
const numberButtons = document.querySelectorAll(
    ".main-festival-banner-ad-button-number button"
);

// 대체할 내용의 배열
const contents = [
    // 첫번째 페이지
    [
        {
            imgUrl: "이미지 URL1",
            date: "날짜1",
            place: "장소1",
            eventName: "이벤트 이름1",
            content: "내용1",
        },
        {
            imgUrl: "이미지 URL2",
            date: "날짜2",
            place: "장소2",
            eventName: "이벤트 이름2",
            content: "내용2",
        },
        {
            imgUrl: "이미지 URL3",
            date: "날짜3",
            place: "장소3",
            eventName: "이벤트 이름3",
            content: "내용3",
        },
        {
            imgUrl: "이미지 URL4",
            date: "날짜4",
            place: "장소4",
            eventName: "이벤트 이름4",
            content: "내용4",
        },
    ],
    // 두번째 페이지
    [
        {
            imgUrl: "새로운 이미지 URL1",
            date: "새로운 날짜1",
            place: "새로운 장소1",
            eventName: "새로운 이벤트 이름1",
            content: "새로운 내용1",
        },
        {
            imgUrl: "새로운 이미지 URL2",
            date: "새로운 날짜2",
            place: "새로운 장소2",
            eventName: "새로운 이벤트 이름2",
            content: "새로운 내용2",
        },
        {
            imgUrl: "새로운 이미지 URL3",
            date: "새로운 날짜3",
            place: "새로운 장소3",
            eventName: "새로운 이벤트 이름3",
            content: "새로운 내용3",
        },
        {
            imgUrl: "새로운 이미지 URL4",
            date: "새로운 날짜4",
            place: "새로운 장소4",
            eventName: "새로운 이벤트 이름4",
            content: "새로운 내용4",
        },
    ],
    // 세번째 페이지
    [
        {
            imgUrl: "또 다른 이미지 URL1",
            date: "또 다른 날짜1",
            place: "또 다른 장소1",
            eventName: "또 다른 이벤트 이름1",
            content: "또 다른 내용1",
        },
        {
            imgUrl: "또 다른 이미지 URL2",
            date: "또 다른 날짜2",
            place: "또 다른 장소2",
            eventName: "또 다른 이벤트 이름2",
            content: "또 다른 내용2",
        },
        {
            imgUrl: "또 다른 이미지 URL3",
            date: "또 다른 날짜3",
            place: "또 다른 장소3",
            eventName: "또 다른 이벤트 이름3",
            content: "또 다른 내용3",
        },
        {
            imgUrl: "또 다른 이미지 URL4",
            date: "또 다른 날짜4",
            place: "또 다른 장소4",
            eventName: "또 다른 이벤트 이름4",
            content: "또 다른 내용4",
        },
    ],
];

// 현재 선택된 페이지의 인덱스와 컨텐츠의 인덱스를 저장할 변수를 초기화합니다.
let currentPage = 0;
let currentContentIndex = 0;

// 초기화 함수 정의
function initialize() {
    // 숫자 버튼들 중 첫 번째 버튼을 선택된 상태로 만듭니다.
    numberButtons[currentPage].style.backgroundColor = "rgb(141, 113, 221)";
    // 초기 컨텐츠를 로드합니다.
    replaceContent(currentPage, currentContentIndex);
}

// 페이지가 로드될 때 초기화 함수 호출
window.addEventListener("load", initialize);

// 왼쪽 버튼 클릭 이벤트 핸들러를 추가합니다.
leftButton.addEventListener("click", function () {
    if (currentPage > 0) {
        numberButtons[currentPage].style.backgroundColor = ""; // 현재 버튼의 배경색 제거
        currentPage--;
        numberButtons[currentPage].style.backgroundColor = "rgb(141, 113, 221)"; // 선택된 버튼에 배경색 적용
        replaceContent(currentPage, currentContentIndex); // 페이지 내용 변경
    }
});

// 오른쪽 버튼 클릭 이벤트 핸들러를 추가합니다.
rightButton.addEventListener("click", function () {
    if (currentPage < contents.length - 1) {
        numberButtons[currentPage].style.backgroundColor = ""; // 현재 버튼의 배경색 제거
        currentPage++;
        numberButtons[currentPage].style.backgroundColor = "rgb(141, 113, 221)"; // 선택된 버튼에 배경색 적용
        replaceContent(currentPage, currentContentIndex); // 페이지 내용 변경
    }
});

// 숫자 버튼 클릭 이벤트 핸들러를 추가합니다.
numberButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        numberButtons[currentPage].style.backgroundColor = ""; // 현재 버튼의 배경색 제거
        currentPage = index;
        button.style.backgroundColor = "rgb(141, 113, 221)"; // 선택된 버튼에 배경색 적용
        replaceContent(currentPage, currentContentIndex); // 페이지 내용 변경
    });
});

// 내용을 대체하는 함수 정의
function replaceContent(index) {
    const currentPageContents = contents[index]; // 현재 페이지에 해당하는 컨텐츠 가져오기

    // 각 요소에 대해 반복하면서 내용 변경
    currentPageContents.forEach(function (content, i) {
        // 대체할 요소들 가져오기
        const imgElement = document.querySelectorAll(
            ".main-festival-banner-ad-img-photo"
        )[i];
        const dateElement = document.querySelectorAll(
            ".main-festival-banner-ad-content-date-date"
        )[i];
        const placeElement = document.querySelectorAll(
            ".main-festival-banner-ad-content-date-place span"
        )[i];
        const eventNameElement = document.querySelectorAll(
            ".main-festival-banner-ad-content-content-a"
        )[i];
        const contentElement = document.querySelectorAll(
            ".main-festival-banner-ad-cost-pay"
        )[i];

        // 내용 대체
        imgElement.src = content.imgUrl;
        dateElement.textContent = content.date;
        placeElement.textContent = content.place;
        eventNameElement.textContent = content.eventName;
        contentElement.textContent = content.content;
    });
}
