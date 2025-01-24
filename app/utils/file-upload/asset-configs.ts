export type AssetType = "RGB_SPLITTING";

interface AssetConfig {
  maxSize: number;
  acceptedTypes: string[];
  bucketName: string;
}

export const ASSET_CONFIGS: Record<AssetType, AssetConfig> = {
  RGB_SPLITTING: {
    maxSize: 5 * 1024 * 1024, // 5MB in bytes
    acceptedTypes: ["image/*"],
    bucketName: "rgb-splitting-bucket", // add real bucketName
  },
}

export const getPresignedURL = async (assetType: AssetType) => {
  // depending on assetType, generate presinged url based on bucket
  return "Mocked presigned URL for " + ASSET_CONFIGS[assetType].bucketName
}