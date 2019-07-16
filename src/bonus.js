/*
 * Complete the 'isMember' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts following parameters:
 *  1. STRING_ARRAY words
 *  2. STRING query
 */

// words = ["foo", "bar", "baz"];
// isMember(words, "foo") returns true
// isMember(words, "foo*") returns false
// isMember(words, "*az") returns true

//         ''
// f                   b
// o                   a
// o               r       z

function isMember(words, query) {
   if (words.includes(query)) {
      return true
   }
   if (query.includes('*')) {
      for (let element of words) { // M would be length of query, N would be length of words O (M * N)
         if (element.length === query.length) {
            for (let i = 0; i < element.length; i++) {
               if (!element[i] === query[i] || !element[i] === '*') {
                  return false
               }
            }
            return true
         }
      }
   }
   return false
}