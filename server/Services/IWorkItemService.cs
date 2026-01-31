using WorkFlowLite.Api.Models;

namespace WorkFlowLite.Api.Services;

public interface IWorkItemService
{
    IEnumerable<WorkItem> GetAll();
    WorkItem? GetById(int id);
    WorkItem Create(WorkItem item);
    bool Update(int id, WorkItem item);
    bool Delete(int id);
}