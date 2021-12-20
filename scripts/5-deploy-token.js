import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x3be4BAF64AC0d54161b368D0161CB4b6f472E5c8");

(async () => {
    try {
        // Deploy a standard ERC-20 contract.
        const tokenModule = await app.deployTokenModule({
            // What's your token's name? Ex. "Ethereum"
            name: "BookDAO Governance Token",
            // What's your token's symbol? Ex. "ETH"
            symbol: "BGKT",
        });
        console.log(
            "✅ Successfully deployed token module, address:",
            tokenModule.address,
        );
    } catch (error) {
        console.error("failed to deploy token module", error);
    }
})();