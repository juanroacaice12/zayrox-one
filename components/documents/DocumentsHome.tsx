import DocumentsHeader from "./DocumentsHeader";
import SearchBar from "./SearchBar";
import FolderGrid from "./FolderGrid";

export default function DocumentsHome() {
  return (
    <div className="space-y-8">

      <DocumentsHeader />

      <SearchBar />

      <FolderGrid />

    </div>
  );
}