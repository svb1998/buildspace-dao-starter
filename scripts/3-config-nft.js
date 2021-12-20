import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0x7EA459C1343305663e239ff64647F83C6848c5aA",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Boken",
                description: "This NFT will give you access to BookDAO!",
                image: readFileSync("scripts/assets/b-nft.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()