// 활동목록, 관심목록 버튼 이벤트
const activityList = document.querySelector("#activity-list");
const interestList = document.querySelector("#interest-activity");
const activeBtn = document.querySelectorAll(".categori-btn");
const categoris = document.querySelectorAll(".activity-categories");

// console.log(activityList);
// console.log(interestList);

activeBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        if (i == 0) {
            // 활동목록 클릭시
            categoris[0].classList.add("activity-categori-on");
            categoris[1].classList.remove("activity-categori-on");
            activityList.style.display = "block";
            interestList.style.display = "none";
        } else {
            // 관심목록 클릭시
            categoris[1].classList.add("activity-categori-on");
            categoris[0].classList.remove("activity-categori-on");
            activityList.style.display = "none";
            interestList.style.display = "block";
        }
    });
});

// 활동 목록 관심버튼(하트) 클릭 이벤트
const likeBtn = document.querySelectorAll(".like-btn");
const likeOn = document.querySelectorAll(".like-on");
const likeOff = document.querySelectorAll(".like-off");

// console.log(likeBtn);
// console.log(likeOn);
// console.log(likeOff);

likeBtn.forEach((btn, i) => {
    // 관심버튼(하트)을 눌렀을때
    btn.addEventListener("click", () => {
        // likeBtn의 갯수만큼 for문으로 반복해서
        for (let j = 0; j < likeBtn.length; j++) {
            // 만약 누른 버튼의 인덱스번호가 관심버튼의 인덱스 번호와 같다면
            if (i == j) {
                if (!likeOff[j].classList.contains("like-none")) {
                    // 만약 관심버튼이 none상태(좋아요가 눌리지 않은 상태)라면
                    likeOff[j].classList.add("like-none");
                    likeOn[j].classList.remove("like-none");
                } else {
                    // 관심버튼이 눌러진 상태라면
                    likeOff[j].classList.remove("like-none");
                    likeOn[j].classList.add("like-none");
                }
            }
        }
    });
});

const likeButton = document.querySelectorAll(".like-button");
const interOn = document.querySelectorAll(".like-on-interest");
const interOff = document.querySelectorAll(".like-off-interest");
const activityDivs = document.querySelectorAll(".activity-wrap-interest");
const unlikeModal = document.querySelector(".unlike-modal-container");
const unlikeCloseBtn = document.querySelector(".unlike-btn");
const myMain = document.querySelector(".mypage-main");

likeButton.forEach((btn, i) => {
    // 관심버튼(하트)을 눌렀을때
    btn.addEventListener("click", () => {
        // likeBtn의 갯수만큼 for문으로 반복해서
        for (let j = 0; j < likeBtn.length; j++) {
            // 만약 누른 버튼의 인덱스번호가 관심버튼의 인덱스 번호와 같다면
            if (i == j) {
                if (!interOff[j].classList.contains("like-none")) {
                    interOff[j].classList.add("like-none");
                    interOn[j].classList.remove("like-none");
                } else {
                    interOff[j].classList.remove("like-none");
                    interOn[j].classList.add("like-none");
                    unlikeModalOn(activityDivs[j]);
                    // activityDivs[j].remove();
                }
            }
        }
    });
});

function unlikeModalOn(activityDiv) {
    unlikeModal.style.display = "flex";
    myMain.style.opacity = "0.3";
    unlikeCloseBtn.addEventListener("click", () => {
        myMain.style.opacity = "1";
        unlikeModal.style.display = "none";
        activityDiv.remove();
    });
}
