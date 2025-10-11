import { Navbar } from "../components/navbar"
export function Resume() {
    return (
      <>
        <div className="bg-slate-900  min-h-screen">
          <Navbar />
          <div className="pt-30">
            <h1 className="text-gray-600">Resume page</h1>
          </div>
        </div>
      </>
    );
}