fnBirthInit();
//출생월
function fnBirthInit() {
  var monthOptTag = "<option id='monthDelOpt'>월</option>";
  for (var i = 1; i <= 12; i++) {
    monthOptTag += "<option>" + i + "</option>";
  }
  document.getElementById("month").innerHTML = monthOptTag;
}

// id, pw, name, e-mail, 성별, 휴대전화 유효성검사
let userId = document.getElementById("userId");
userId.addEventListener("focusout", vailableChk_id);
let userPw = document.getElementById("userPw");
userPw.addEventListener("blur", vailableChk_pw);
let userPwChk = document.getElementById("userPwChk");
userPwChk.addEventListener("blur", vailableChk_pwChk);
let userName = document.getElementById("userName");
userName.addEventListener("blur", vailableChk_Name);
let userBirthYear = document.getElementById("userBirthYear");
userBirthYear.addEventListener("blur", vailableChk_Birth);
let userBirthMonth = document.getElementById("month");
userBirthMonth.addEventListener("blur", vailableChk_Birth);
let userBirthDate = document.getElementById("birthDate");
userBirthDate.addEventListener("blur", vailableChk_Birth);
let userGender = document.getElementById("userGender");
userGender.addEventListener("blur", vailableChk_Gender);
let userEmail = document.getElementById("userEmail");
userEmail.addEventListener("blur", vailableChk_Email);
let userNumber = document.getElementById("userNumber");
userNumber.addEventListener("blur", vailableChk_number);

function vailableChk_id() {
  let reId = document.getElementById("reId");
  let userId_val = userId.value;
  if (userId_val == "") {
    reId.style.display = "block";
    reId.innerText = "필수 정보입니다.";
    userId.focus();
  } else {
    reId.style.display = "none";
    return true;
  }
}

function vailableChk_pw() {
  let rePw = document.getElementById("rePw");
  let userPw_val = userPw.value;
  if (userPw_val == "") {
    rePw.style.display = "block";
    rePw.innerText = "필수 정보입니다.";
    userPw.focus();
  } else {
    rePw.style.display = "none";
    return true;
  }
}

function vailableChk_pwChk() {
  let rePwChk = document.getElementById("rePwChk");
  let userPwChk_val = userPwChk.value;
  let userPw_val = userPw.value;
  if (userPwChk_val == "") {
    rePwChk.style.display = "block";
    rePwChk.innerText = "필수 정보입니다.";
    userPwChk.focus();
  } else if (userPwChk_val !== userPw_val) {
    rePwChk.innerText = "비밀번호가 일치하지 않습니다.";
    rePwChk.style.display = "block";
    userPw.focus();
  } else if (userPwChk_val === userPw_val) {
    rePwChk.style.display = "none";
    return true;
  }
}

function vailableChk_Name() {
  let reName = document.getElementById("reName");
  let userName_val = userName.value;
  if (userName_val == "") {
    reName.style.display = "block";
    reName.innerText = "필수 정보입니다.";
    userName.focus();
  } else {
    reName.style.display = "none";
    return true;
  }
}

function vailableChk_Birth() {
  let reBirth = document.getElementById("reBirth");
  let userBirthYear_val = userBirthYear.value;
  let userBirthMonth_val = month.value;
  let userBirthDate_val = birthDate.value;

  if (userBirthYear_val === "") {
    reBirth.style.display = "block";
    reBirth.innerText = "태어난 년도 4자리를 정확하게 입력하세요.";
  } else if (userBirthMonth_val === "월") {
    reBirth.style.display = "block";
    reBirth.innerText = "태어난 월을 선택하세요.";
  } else if (userBirthYear_val <= 1920) {
    userBirthYear_val = parseInt(userBirthYear_val);
    reBirth.innerText = "정말이세요?";
  } else if (userBirthDate_val == "" || userBirthDate_val >= 31) {
    userBirthDate_val = parseInt(userBirthDate_val);
    reBirth.style.display = "block";
    reBirth.innerText = "태어난 일(날짜) 2자리를 정확하게 입력하세요.";
  } else if (userBirthMonth_val !== "월") {
    reBirth.style.display = "none";
    return true;
  }
}

function vailableChk_Gender() {
  let reGender = document.getElementById("reGender");
  let userGender_val = userGender.value;

  if (userGender_val == 0) {
    reGender.style.display = "block";
    reGender.innerText = "필수 정보입니다.";
  } else {
    reGender.style.display = "none";
    return true;
  }
}

function vailableChk_Email() {
  let reEmail = document.getElementById("reEmail");
  let userEmail_val = userEmail.value;
  userEmail_val = userEmail_val.trim();
  let atSignIdx = userEmail_val.indexOf("@"); // at sign
  let dotSignIdx = userEmail_val.indexOf("."); //dot sign

  if (atSignIdx < 0) {
    reEmail.style.display = "block";
    reEmail.innerText = "이메일 주소를 다시 확인해주세요.";
  } else if (atSignIdx < 1) {
    reEmail.style.display = "block";
    reEmail.innerText = "이메일 주소를 다시 확인해주세요.";
  } else if (dotSignIdx < 0) {
    reEmail.style.display = "block";
    reEmail.innerText = "이메일 주소를 다시 확인해주세요.";
  } else if (atSignIdx > dotSignIdx) {
    reEmail.style.display = "block";
    reEmail.innerText = "이메일 주소를 다시 확인해주세요.";
  } else {
    reEmail.style.display = "none";
    return true;
  }
}

function vailableChk_number() {
  let reNumber = document.getElementById("reNumber");
  let userNumber_val = userNumber.value;

  if (userNumber_val == "") {
    reNumber.style.display = "block";
    reNumber.innerText = "필수 정보입니다.";
  } else {
    reNumber.style.display = "none";
    return true;
  }
}
// 가입하기

function vailableChk() {
  vailableChk_id();
  vailableChk_pw();
  vailableChk_pwChk();
  vailableChk_Name();
  vailableChk_Birth();
  vailableChk_Gender();
  vailableChk_Email();
  vailableChk_number();
}

function fnJoin() {
  vailableChk();
  let joinFrm = document.getElementById("joinFrm");
  if (vailableChk == true) {
    joinFrm.action = "https://www.naver.com";
    joinFrm.submit();
  }
}
