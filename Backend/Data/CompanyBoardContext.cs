using System;
using System.Collections.Generic;
using Backend.Models.DB;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;

public partial class CompanyBoardContext : DbContext
{
    public CompanyBoardContext(DbContextOptions<CompanyBoardContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AnonymouQaanser> AnonymouQaansers { get; set; }

    public virtual DbSet<AnonymouQaquestion> AnonymouQaquestions { get; set; }

    public virtual DbSet<InternalBoardComment> InternalBoardComments { get; set; }

    public virtual DbSet<InternalBoardFavorite> InternalBoardFavorites { get; set; }

    public virtual DbSet<InternalBoardPost> InternalBoardPosts { get; set; }

    public virtual DbSet<NoticeCheck> NoticeChecks { get; set; }

    public virtual DbSet<NoticePost> NoticePosts { get; set; }

    public virtual DbSet<TechnicalArticleBookmark> TechnicalArticleBookmarks { get; set; }

    public virtual DbSet<TechnicalArticleComment> TechnicalArticleComments { get; set; }

    public virtual DbSet<TechnicalArticleFavorite> TechnicalArticleFavorites { get; set; }

    public virtual DbSet<TechnicalArticlePost> TechnicalArticlePosts { get; set; }

    public virtual DbSet<TechnicalOutputComment> TechnicalOutputComments { get; set; }

    public virtual DbSet<TechnicalOutputFavorite> TechnicalOutputFavorites { get; set; }

    public virtual DbSet<TechnicalOutputPost> TechnicalOutputPosts { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AnonymouQaanser>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Anonymou__3214EC07437550CE");

            entity.ToTable("AnonymouQAAnsers");

            entity.HasOne(d => d.Question).WithMany(p => p.AnonymouQaansers)
                .HasForeignKey(d => d.QuestionId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_AnonymouQAAnsers_AnonymouQAQuestions");

            entity.HasOne(d => d.User).WithMany(p => p.AnonymouQaansers)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_AnonymouQAAnsers_Users");
        });

        modelBuilder.Entity<AnonymouQaquestion>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Anonymou__3214EC07BC8DB227");

            entity.ToTable("AnonymouQAQuestions");

            entity.Property(e => e.Title).HasMaxLength(255);

            entity.HasOne(d => d.User).WithMany(p => p.AnonymouQaquestions)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_AnonymouQAQuestions_Users");
        });

        modelBuilder.Entity<InternalBoardComment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Internal__3214EC0775B530DB");

            entity.HasOne(d => d.Post).WithMany(p => p.InternalBoardComments)
                .HasForeignKey(d => d.PostId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_InternalBoardComments_InternalBoardPosts");

            entity.HasOne(d => d.User).WithMany(p => p.InternalBoardComments)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_InternalBoardComments_Users");
        });

        modelBuilder.Entity<InternalBoardFavorite>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Internal__3214EC07F897267A");

            entity.HasIndex(e => new { e.UserId, e.PostId }, "UQ_InternalBoardFavorites_UserId_PostId").IsUnique();

            entity.HasOne(d => d.Post).WithMany(p => p.InternalBoardFavorites)
                .HasForeignKey(d => d.PostId)
                .HasConstraintName("FK_InternalBoardFavorites_InternalBoardPosts");

            entity.HasOne(d => d.User).WithMany(p => p.InternalBoardFavorites)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_InternalBoardFavorites_Users");
        });

        modelBuilder.Entity<InternalBoardPost>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Internal__3214EC0739C61710");

            entity.Property(e => e.Image).HasMaxLength(255);
            entity.Property(e => e.Title).HasMaxLength(255);

            entity.HasOne(d => d.User).WithMany(p => p.InternalBoardPosts)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_InternalBoardPosts_Users");
        });

        modelBuilder.Entity<NoticeCheck>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__NoticeCh__3214EC078350C25F");

            entity.HasOne(d => d.Post).WithMany(p => p.NoticeChecks)
                .HasForeignKey(d => d.PostId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NoticeChecks_NoticePosts");

            entity.HasOne(d => d.User).WithMany(p => p.NoticeChecks)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_NoticeChecks_Users");
        });

        modelBuilder.Entity<NoticePost>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__NoticePo__3214EC07A7D09F1B");

            entity.Property(e => e.Title).HasMaxLength(255);

            entity.HasOne(d => d.User).WithMany(p => p.NoticePosts)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_NoticePosts_Users");
        });

        modelBuilder.Entity<TechnicalArticleBookmark>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Technica__3214EC07C255F0BF");

            entity.HasIndex(e => new { e.UserId, e.PostId }, "UQ_TechnicalArticleBookmarks_UserId_PostId").IsUnique();

            entity.HasOne(d => d.Post).WithMany(p => p.TechnicalArticleBookmarks)
                .HasForeignKey(d => d.PostId)
                .HasConstraintName("FK_TechnicalArticleBookmarks_Posts");

            entity.HasOne(d => d.User).WithMany(p => p.TechnicalArticleBookmarks)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_TechnicalArticleBookmarks_Users");
        });

        modelBuilder.Entity<TechnicalArticleComment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Technica__3214EC07D592AFC0");

            entity.HasOne(d => d.Post).WithMany(p => p.TechnicalArticleComments)
                .HasForeignKey(d => d.PostId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_TechnicalArticleComments_TechnicalArticlePosts");

            entity.HasOne(d => d.User).WithMany(p => p.TechnicalArticleComments)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_TechnicalArticleComments_Users");
        });

        modelBuilder.Entity<TechnicalArticleFavorite>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Technica__3214EC07697EECB2");

            entity.HasIndex(e => new { e.UserId, e.PostId }, "UQ_TechnicalArticleFavorites_UserId_PostId").IsUnique();

            entity.HasOne(d => d.Post).WithMany(p => p.TechnicalArticleFavorites)
                .HasForeignKey(d => d.PostId)
                .HasConstraintName("FK_TechnicalArticleFavorites_TechnicalArticlePosts");

            entity.HasOne(d => d.User).WithMany(p => p.TechnicalArticleFavorites)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_TechnicalArticleFavorites_Users");
        });

        modelBuilder.Entity<TechnicalArticlePost>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Technica__3214EC07D3DC75F8");

            entity.Property(e => e.Title).HasMaxLength(255);

            entity.HasOne(d => d.User).WithMany(p => p.TechnicalArticlePosts)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_TechnicalArticlePosts_Users");
        });

        modelBuilder.Entity<TechnicalOutputComment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Technica__3214EC076EFEB6C6");

            entity.HasOne(d => d.Post).WithMany(p => p.TechnicalOutputComments)
                .HasForeignKey(d => d.PostId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_TechnicalOutputComments_TechnicalOutputPosts");

            entity.HasOne(d => d.User).WithMany(p => p.TechnicalOutputComments)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_TechnicalOutputComments_Users");
        });

        modelBuilder.Entity<TechnicalOutputFavorite>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Technica__3214EC0710C00BEA");

            entity.HasIndex(e => new { e.UserId, e.PostId }, "UQ_TechnicalOutputFavorites_UserId_PostId").IsUnique();

            entity.HasOne(d => d.Post).WithMany(p => p.TechnicalOutputFavorites)
                .HasForeignKey(d => d.PostId)
                .HasConstraintName("FK_TechnicalOutputFavorites_Posts");

            entity.HasOne(d => d.User).WithMany(p => p.TechnicalOutputFavorites)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_TechnicalOutputFavorites_Users");
        });

        modelBuilder.Entity<TechnicalOutputPost>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Technica__3214EC07F276E516");

            entity.Property(e => e.Title).HasMaxLength(255);

            entity.HasOne(d => d.User).WithMany(p => p.TechnicalOutputPosts)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_TechnicalOutputPosts_Users");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Users__3214EC0791CDA964");

            entity.HasIndex(e => e.EmployeeId, "UQ__Users__7AD04F10AE60BC79").IsUnique();

            entity.Property(e => e.Department).HasMaxLength(255);
            entity.Property(e => e.EmployeeId).HasMaxLength(255);
            entity.Property(e => e.Name).HasMaxLength(255);
            entity.Property(e => e.Password).HasMaxLength(255);
            entity.Property(e => e.Role).HasMaxLength(255);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
