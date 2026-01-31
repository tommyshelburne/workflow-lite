using System.ComponentModel.DataAnnotations;

namespace WorkFlowLite.Api.Dtos;

public class CreateWorkItemDto
{
    [Required]
    public string Title { get; set; } = string.Empty;

    public string? Description { get; set; }
}