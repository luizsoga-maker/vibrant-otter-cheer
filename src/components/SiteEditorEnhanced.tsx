// In the pages list, update the button:
<div key={page.id} className="flex items-center gap-1">
  <Button
    variant={activePage === index ? 'default' : 'ghost'}
    className="flex-1 justify-start"
    onClick={() => setActivePage(index)}
  >
    {page.title}
  </Button>
  {pages.length > 1 && (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => duplicatePage(index)}
        className="h-8 w-8 p-0"
        title="Duplicate page"
      >
        <Copy className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => deletePage(index)}
        className="h-8 w-8 p-0"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </>
  )}
</div>