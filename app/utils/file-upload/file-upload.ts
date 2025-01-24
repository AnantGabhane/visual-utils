import { getPresignedURL } from "@/app/s3/pre-signed-url"
import { log } from "console"
import { AssetType } from "./asset-configs"
import { isAssetValid } from "./file-validation"

export const uplaodFile = async (assetType: AssetType, file: File) => {
    if (!isAssetValid(assetType, file)) {
        console.log("file size is not valid");
        return;
    }

    const presignedUrl = await getPresignedURL(assetType)
    console.log("Uplaod it to s3 with presigned url: " + presignedUrl);


}