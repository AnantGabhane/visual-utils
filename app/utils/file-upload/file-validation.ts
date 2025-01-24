import { ASSET_CONFIGS, AssetType } from "./asset-configs";

export const isAssetValid = (assetType: AssetType, file: File) => {
    if (file.size > ASSET_CONFIGS[assetType].maxSize) {
        return false;
    }
    return true;
}