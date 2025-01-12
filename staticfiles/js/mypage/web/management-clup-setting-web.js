// clup-name-input의 글자수 표시하는 이벤트
const clupNameInput = document.querySelector(".clup-name-input");
const inputValueCount = document.querySelector(".input-value-count");

inputValueCount.innerText = `${clupNameInput.value.length} / 20`;

clupNameInput.addEventListener("input", () => {
    inputValueCount.innerText = `${clupNameInput.value.length} / 20`;
});

// 모임 프로필 업로드 클릭 시 label이 클릭 되는 이벤트
const clupProfileUploadBtn = document.querySelector(".clup-profile-upload-btn");
const clupProfileUploadLabel = document.querySelector(".clup-profile-input-label");
const clupProfileInput = document.querySelector("#clup-profile-input");

clupProfileUploadBtn.addEventListener("click", () => {
    clupProfileUploadLabel.click();
});

// 모임 프로필 업로드 시 이미지 확장자가 아니라면 오류 모달 표시
clupProfileInput.addEventListener("change", (e) => {
    if (e.target.value) {
        let fileName = e.target.files[0].name;

        // 이미지 관련 확장자가 아니라면 확장자 오류 모달 표시
        if (!checkExtension(fileName, exampeExtensions)) {
            e.target.value = "";
            extensionErrorModalContainer.style.animation = "popUp 0.5s";
            extensionErrorModalWrap.style.display = "block";
            return;
        }
    }
});

// 이미지 업로드 클릭 시 배경이미지 input이 클릭 되는 이벤트
const backgroundUploadBtn = document.querySelector(".background-upload-btn");
const backgroundImgInput = document.querySelector(".background-img-input");

backgroundUploadBtn.addEventListener("click", () => {
    backgroundImgInput.click();
});

//

// 파일의 용량으로 단위를 계산하고 수정해주는 함수
const getFileSizeWithExtension = (sizeInBytes) => {
    let fileSizeExt = new Array("bytes", "kb", "mb", "gb");
    let i = 0;
    let checkSize = sizeInBytes;
    while (checkSize > 900) {
        checkSize /= 1024;
        i++;
    }
    checkSize = Math.round(checkSize * 100) / 100 + "" + fileSizeExt[i];
    return checkSize;
};

// 파일의 확장자를 확인해주는 함수
const checkExtension = (fileName, extensions) => {
    // 파일 이름에서 확장자를 추출
    const fileExtension = fileName.split(".").pop().toLowerCase();
    // 허용할 목록들과 비교
    return extensions.includes(fileExtension);
};

// 배경화면 input이 바뀔때 확장자를 검사하고 용량을 변환하여 뿌리는 이벤트
const exampeExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "tiff", "tif", "webp"];
const extensionErrorModalWrap = document.querySelector(".extension-error-modal-wrap");
const extensionErrorModalContainer = extensionErrorModalWrap.querySelector(".extension-error-modal-container");
const backgroundFileCapacity = document.querySelector(".background-file-capacity");
const backgroundFileName = document.querySelector(".background-file-name");
const backgroundFileWrap = document.querySelector(".background-file-wrap");

const createBackgroundInfo = () => {
    if (backgroundImgInput.value) {
        let fileName = backgroundImgInput.files[0].name;

        // 이미지 관련 확장자가 아니라면 확장자 오류 모달 표시
        if (!checkExtension(fileName, exampeExtensions)) {
            backgroundImgInput.value = "";
            extensionErrorModalContainer.style.animation = "popUp 0.5s";
            extensionErrorModalWrap.style.display = "block";
            return;
        }

        fileSize = backgroundImgInput.files[0].size;
        backgroundFileCapacity.innerText = getFileSizeWithExtension(fileSize);
        backgroundFileName.innerText = fileName;
        backgroundFileWrap.style.display = "block";
    }
};

backgroundImgInput.addEventListener("change", () => {
    createBackgroundInfo();
});

// 확장자 오류 모달 닫는 이벤트
const extensionErrorModalCloseBtn = document.querySelector(".extension-error-modal-close-btn");

extensionErrorModalCloseBtn.addEventListener("click", () => {
    extensionErrorModalContainer.style.animation = "popDown 0.5s";
    setTimeout(() => {
        extensionErrorModalWrap.style.display = "none";
    }, 450);
});

// 배경화면 정보 삭제 클릭 시 발생하는 이벤트
const backgroundCancleBox = document.querySelector(".background-cancle-box");

backgroundCancleBox.addEventListener("click", () => {
    backgroundFileWrap.style.display = "none";
});

// 모임명, 담당자 이름, 이메일, 전화번호의 상태에 따라 발생하는 이벤트
const clupManagerNameInput = document.querySelector("#clup-manager-name-input");
const clupManagerEmailInput = document.querySelector("#clup-manager-email-input");
const clupManagerPhoneInput = document.querySelector("#clup-manager-phone-input");
const clupNameInputError = document.querySelector(".clup-name-input-error");
const noneNameWarning = document.querySelector(".none-name-warning");
const noneEmailWarning = document.querySelector(".none-email-warning");
const nonePhoneWarning = document.querySelector(".none-phone-warning");
const clupSaveBtn = document.querySelector(".clup-save-btn");

const checkInputValue = () => {
    if (!clupNameInput.value || !clupManagerNameInput.value || !clupManagerEmailInput.value || !clupManagerPhoneInput.value) {
        clupSaveBtn.disabled = true;
        return;
    }
    clupSaveBtn.disabled = false;
};
clupNameInput.addEventListener("input", () => {
    checkInputValue();
});
clupManagerNameInput.addEventListener("input", () => {
    checkInputValue();
});
clupManagerEmailInput.addEventListener("input", () => {
    checkInputValue();
});
clupManagerPhoneInput.addEventListener("input", () => {
    checkInputValue();
});
checkInputValue();

const noneBackgroundWrap = document.querySelector(".none-background-wrap");

noneBackgroundWrap.addEventListener("dragenter", (e) => {
    e.preventDefault();
});
noneBackgroundWrap.addEventListener("dragover", (e) => {
    e.preventDefault();
});
noneBackgroundWrap.addEventListener("dragleave", (e) => {
    e.preventDefault();
});
noneBackgroundWrap.addEventListener("drop", (e) => {
    e.preventDefault();
    let file = e.dataTransfer;
    backgroundImgInput.files = file.files;
    createBackgroundInfo();
});
