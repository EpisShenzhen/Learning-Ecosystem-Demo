import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

// 先ほどメモして残していた editionDrop のコントラクトアドレスをこちらに記載してください
const editionDrop = sdk.getContract("0x80f0115ff72cc76a104f1a293f3a2b841c79174D", "edition-drop");

(async () => {
  try {
    await (await editionDrop).createBatch([
      {
        name: "Learning Ecosystem Membership NFT",
        description:
          "Learning Ecosystem Dao にアクセスすることができる限定アイテムです",
        image: readFileSync("src/scripts/assets/membership.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();