import { ASSET_CONFIGS, AssetType } from "@/app/utils/file-upload/asset-configs";

export const getPresignedURL = async (assetType: AssetType) => {
    // depending on assetType, generate presinged url based on bucket
    return "Mocked presigned URL for " + ASSET_CONFIGS[assetType].bucketName
}