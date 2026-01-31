using Microsoft.AspNetCore.Mvc;
using WorkFlowLite.Api.Models;
using WorkFlowLite.Api.Dtos;
using WorkFlowLite.Api.Services;

namespace WorkFlowLite.Api.Controllers;

[ApiController]
[Route("api/workitems")]
public class WorkItemsController : ControllerBase
{
    private readonly IWorkItemService _service;

    public WorkItemsController(IWorkItemService service)
    {
        _service = service;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_service.GetAll());
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var item = _service.GetById(id);
        return item == null ? NotFound() : Ok(item);
    }

    [HttpPost]
    public IActionResult Create(CreateWorkItemDto dto)
    {
        var item = new WorkItem
        {
            Title = dto.Title,
            Description = dto.Description
        };

        var created = _service.Create(item);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, UpdateWorkItemDto dto)
    {
        var success = _service.Update(id, new WorkItem
        {
            Title = dto.Title,
            Description = dto.Description,
            Status = dto.Status
        });

        return success ? NoContent() : NotFound();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        return _service.Delete(id) ? NoContent() : NotFound();
    }
}