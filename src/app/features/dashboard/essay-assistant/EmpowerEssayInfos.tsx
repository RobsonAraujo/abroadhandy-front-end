import Input from "./buttons/input";

export default function EmpowerEssayInfos() {
  return (
    <div className="mb-6 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Which school is the essay about"
          placeholder="Harvard University"
        />
        <Input
          label="Which question your essay is about"
          placeholder="What experiences have shaped ?"
        />
      </div>
    </div>
  );
}
