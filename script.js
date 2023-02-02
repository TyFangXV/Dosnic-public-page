const dlBtn = document.getElementsByClassName("download-button")[0];

dlBtn.setAttribute("download", `${crypto.randomUUID()}.apk`)