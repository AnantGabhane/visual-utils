import FileUploader from "./components/FileUploader";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>FileUploader - Upload an image to split it into its RGB components</p>
      <FileUploader assetType="RGB_SPLITTING" />
    </div>
  );
}
