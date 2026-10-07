// Problem: https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function (s, k) {
    let windowLength = k,
        noGowindows = [],
        totalStrs = 0;

    if (k == 1) return s.length;

    while (windowLength <= s.length) {
        windowIterator: for (
            let windowCount = 0, startIndex = windowCount, endIndex = startIndex + windowLength - 1;
            endIndex < s.length;
            ++windowCount, startIndex = windowCount, endIndex = startIndex + windowLength - 1
        ) {
            const sInd = startIndex, eInd = endIndex;

            // Finding out if any previous palindromes are overlapping
            const foundOverlap = noGowindows.find(([sIn, eIn]) => (startIndex <= eIn && endIndex >= sIn));

            // If this window is an overlap with a previous palindrome, skip ahead, out of this window
            if (foundOverlap !== undefined) {
                windowCount = foundOverlap[1];
                continue windowIterator;
            }


            while (endIndex > startIndex)
                if (s[startIndex++] !== s[endIndex--]) continue windowIterator;

            noGowindows.push([sInd, eInd]);
            totalStrs++;
            windowCount = eInd;
        }

        windowLength++;
    }

    return totalStrs;
};

console.log(maxPalindromes("nidinhplkemyryyrymeklphnidinpwlkogggifpupxmxsxxsxmxpupfigggoklwpkxrrcrbytyjqbpbqidvwpymvgygvmypwvdiqbpbqjytybrcrrajrfvgwzmniukskuinmzwgvfremvyhunljhjbuszfozofzsubjhjlnuhyvmesodgkgvnyeobvvbbvvboeynvbkrmkkkkmrkbmhseoqhphkpimegfaelmwlibbbbilwmleafgemipkhphqoeshmehidggatdaeevevwqqlhncxlcpkvqnnqvkpclxcnhlqqwveveeadtaggdojcryfdckcuwwinimpxybthtbyxpminiwwuckcdfyrcjgxkvsibhaodwppwdoahbisvkddquufokwjdzzvckybmwxmbjbmxwmbykcvzzdjwkofuuqsbmmfbxaynonlxkzuhhlqwwqlhhuzkxlnonyaxbfmmbszfrrfzlztimifvywnjwidebfegjixugqgeuuegqguxijgefbediwjnwyvfimitrojxfbglwxxhmlctqkrorkqtclmhxxwlgbfxjoxkaccdajnuegrytenttnetyrgeunjadccahsammbxbbxbmmashfdznohifexneahpimkkmiphaenxejoinhnnzpyuegclzerejejerezlcgeuypznnhniojiwgrixqfvmzdjjdzmvfqxirgwxcnbubnccnxxncskpkbqbkyqjsclpskkreasklbboobblksaerkksplcsjkklqqjwjqqlkkpjuwslpeomxxmoeplswtonqgncvfazkoguviuiiuivugokzafvcngqikluwzutwkrlqmoegypztwhpdwrwdphwtzpygeomqlrkwtuzwulktelwojlfoxphulqugduxkkkkxudguqluhpxophkdxnlifuvgcbbcgvufilnjrokcphagutlciauhujdcqqztushsutzqqcdjuhuaicltugalusowprahtdddlgafxssevondrvxvrdnovessxfagldddtharpwocnpensowmbbdctsnbgcgioarfpwwpfraoigcgbnstcdbbmwosegscreyeedzkuoacfjpsekkespjfcaoukzdeeyercsgupmxvidfqwqmpkfkpmqwqfdivxmlmsekutsejvppvjestukesnfmrgcttcgrmfapnwvjebieeweeibejvwnvk", 4))