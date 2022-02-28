     // This is an interview question asked by Amazon.
      // Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.
      // For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
      function findLongest(s, k) {
        let max = 0;
        let res = "";

        for (let i = 0; i < s.length; i++) {
          for (let j = 0; j < s.length; j++) {
            if (
              new Set(s.substring(i, j)).size == k &&
              s.substring(i, j).length > max
            ) {
              max = s.substring(i, j).length;
              res = s.substring(i, j);
            }
          }
        }
        return res;
      }