grabTweets("twitter/andreineagoie"),
  (error, andreiTweets) => {
    if (error) {
      throw Error;
    }
    displayTweets(andreiTweets);
    grabTweets("twitter/elonmusk"),
      (error, elonTweets) => {
        if (error) {
          throw Error;
        }
        displayTweets(elonTweets);
        grabTweets("twitter/vitalikbuterin"),
          (error, vilatikTweets) => {
            if (error) {
              throw Error;
            }
          };
        displayTweets(vilatikTweets);
      };
  };
