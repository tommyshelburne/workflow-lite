using WorkFlowLite.Api.Models;

namespace WorkFlowLite.Api.Services;

public class WorkItemService : IWorkItemService
{
    private readonly List<WorkItem> _items = new();

    public IEnumerable<WorkItem> GetAll() => _items;

    public WorkItem? GetById(int id) =>
        _items.FirstOrDefault(i => i.Id == id);

    public WorkItem Create(WorkItem item)
    {
        item.Id = _items.Count + 1;
        _items.Add(item);
        return item;
    }

    public bool Update(int id, WorkItem updated)
    {
        var existing = GetById(id);
        if (existing == null) return false;

        existing.Title = updated.Title;
        existing.Description = updated.Description;
        existing.Status = updated.Status;
        return true;
    }

    public bool Delete(int id)
    {
        var item = GetById(id);
        if (item == null) return false;

        _items.Remove(item);
        return true;
    }
}