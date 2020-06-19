/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s==null || s.length < 1) return "";
    
    let start=0;
    let end=0;
    
    let exploreAroundCenter = (L, R, s) => {
        let len = 0;        
        while (L>=0 && R<s.length && s.charAt(L) == s.charAt(R)) {
            len = R - L + 1;
            L--;
            R++;
        }
        return len;
    }
    
    
    for (let center=0; center<s.length; center++) {
        let len1 = exploreAroundCenter(center, center, s);
        let len2 = exploreAroundCenter(center, center + 1, s);
        
        if (len1 > end-start) {
            start = center - len1/2;
            end = center + len1/2;
        }
        
        if(len2 > end-start) {
            start = center+1 - len2/2;
            end = center+1 + (len2/2) ;
        }
    }
    
    return s.substring(Math.round(start), Math.round(end));
 
};
