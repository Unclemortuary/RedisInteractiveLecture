namespace Tetflix.Models
{
    public class Film
    {
        public int Id { get; private set; }
        public string Title { get; private set; }
        public string Cover { get; private set; }

        public Film(int id, string title, string cover)
        {
            Id = id;
            Title = title;
            Cover = cover;
        }
    }
}
