const Sidebar = ({ header, primaryLinks, groupedLinks, utilityLinks, footer }) => {
  return (
    <aside className="w-64 h-screen bg-amber-500/5
                      shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]
                      p-6 flex flex-col justify-between text-gray-700 font-medium">

      {/* Header */}
      <div className="mb-6">
        {header}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-6 overflow-y-auto">

        {/* Primary Navigation */}
        <div className="flex flex-col gap-3">
          {primaryLinks}
        </div>

        {/* Grouped Section */}
        {groupedLinks && (
          <div className="flex flex-col gap-2">
            <h3 className="text-xs uppercase tracking-wide text-gray-500/80">Management</h3>
            <div className="flex flex-col gap-3">
              {groupedLinks}
            </div>
          </div>
        )}

        {/* Utility Links */}
        {utilityLinks && (
          <div className="flex flex-col gap-3 border-t border-gray-300/30 pt-4">
            {utilityLinks}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-6 border-t border-gray-300/30">
        {footer}
      </div>
    </aside>
  );
};

export default Sidebar;
