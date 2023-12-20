export function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}

export function threeDotString(str, maxLen = 100) {
    return str.slice(0, maxLen).trim() + " ...";
}