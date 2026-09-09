import { useState } from "react";

function Authoring() {
  const menuItems = [
    {
      name: "My Work",
      icon: "▣",
      description: "Review your recent authoring work and drafts.",
    },
    {
      name: "Quick Access Lists",
      icon: "▤",
      description: "Open frequently used lists and saved shortcuts.",
    },
    {
      name: "Articles",
      icon: "▧",
      description: "Create, edit, and organize your knowledge articles.",
    },
    {
      name: "Case Bases",
      icon: "▤",
      description: "Manage reusable case information and references.",
    },
  ];
  const [activeItem, setActiveItem] = useState("Articles");
  const activeMenuItem = menuItems.find((item) => item.name === activeItem);

  return (
    <div className="flex h-[calc(100vh-40px)] flex-col overflow-hidden bg-[#eef5fd] md:flex-row">

      {/* Sidebar */}
      <aside className="relative w-full shrink-0 bg-[#eef5fd] md:w-[205px]">

        {/* Sidebar Content */}
        <div className="px-2 pt-6 md:pt-[55px]">

          <h4 className="mb-3 text-[13px] font-bold tracking-[0.3px] text-[#20242b]">
            AUTHORING
          </h4>

          <div className="flex flex-col gap-[2px]">

            {menuItems.map((item) => (
              <button
                type="button"
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                aria-pressed={activeItem === item.name}
                className={`
                  flex h-[38px] w-full cursor-pointer md:w-[177px]
                  items-center gap-[10px]
                  rounded-[5px]
                  px-[9px]
                  text-[14px]
                  font-medium
                  text-[#252a31]
                  text-left
                  transition
                  ${
                    activeItem === item.name
                      ? "bg-[#d8e8fb]"
                      : "hover:bg-[#e3edf9]"
                  }
                `}
              >
                <span className="w-[22px] text-[20px] leading-none">
                  {item.icon}
                </span>

                <span>{item.name}</span>
              </button>
            ))}

          </div>
        </div>

        {/* Collapse Button */}

      </aside>

      {/* Main Content */}
      <main
        className="
          grid
          grid-cols-1
          min-w-0
          min-h-0
          flex-1
          md:grid-cols-3
          lg:grid-cols-[260px_260px_minmax(0,1fr)]
          gap-[7px]
          overflow-auto
          p-4
          md:p-[24px]
        "
      >

        {/* First Panel */}
        <div
          className="
            h-[clamp(180px,28vh,320px)]
            min-w-0
            md:h-full
            rounded-[12px]
            bg-white
            p-5
          "
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#7a8796]">
            Workspace
          </p>
          <h2 className="text-lg font-semibold text-[#20242b]">
            {activeMenuItem.name}
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#687585]">
            {activeMenuItem.description}
          </p>
        </div>

        {/* Second Panel */}
        <div
          className="
            h-[clamp(180px,28vh,320px)]
            min-w-0
            md:h-full
            rounded-[12px]
            bg-white
            p-5
          "
        >
          <p className="mb-3 text-sm font-semibold text-[#20242b]">
            Recent items
          </p>
          {/* dummy loading div */}
          <div className="space-y-3">
            <div className="h-3 w-3/4 rounded bg-[#e8f0f8]" />
            <div className="h-3 w-1/2 rounded bg-[#e8f0f8]" />
            <div className="h-3 w-2/3 rounded bg-[#e8f0f8]" />
          </div>
        </div>

        {/* Third Panel */}
        <div
          className="
            h-[clamp(180px,28vh,320px)]
            min-w-0
            md:h-full
            rounded-[12px]
            bg-white
            p-5
          "
        >
          <p className="mb-3 text-sm font-semibold text-[#20242b]">
            Details
          </p>
          <p className="text-sm leading-6 text-[#687585]">
            Select another menu item to view its dummy content here.
          </p>
        </div>

      </main>

    </div>
  );
}

export default Authoring;