namespace Backend.Models.DTO.Requests.Common
{
    public class CommentRequestDTO
    {
        public int PostId { get; set; }
        required
        public string Text { get; set; }
    }
}