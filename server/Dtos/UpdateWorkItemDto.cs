using System.ComponentModel.DataAnnotations;

namespace WorkFlowLite.Api.Dtos;

public class UpdateWorkItemDto
{
    [Required]
    public string Title { get; set; } = string.Empty;

    public string? Description { get; set; }

    [Required]
    public string Status { get; set; } = "Open";
}