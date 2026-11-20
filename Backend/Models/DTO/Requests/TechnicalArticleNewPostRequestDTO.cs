namespace Backend.Models.DTO.Requests
{
    public class TechnicalArticleNewPostRequestDTO
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty; 
        public string Text {  get; set; } = string.Empty;
    }
}