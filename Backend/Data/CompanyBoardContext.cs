using System;
using System.Collections.Generic;
using Backend.Models.DB;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;

public partial class CompanyBoardContext : DbContext
{
    public CompanyBoardContext()
    {
    }

    public CompanyBoardContext(DbContextOptions<CompanyBoardContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Bookmark> Bookmarks { get; set; }

    public virtual DbSet<Comment> Comments { get; set; }

    public virtual DbSet<Favorite> Favorites { get; set; }

    public virtual DbSet<NoticeCheck> NoticeChecks { get; set; }

    public virtual DbSet<Post> Posts { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Bookmark>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Bookmark__3214EC07FE4F407A");

            entity.HasOne(d => d.Post).WithMany(p => p.Bookmarks)
                .HasForeignKey(d => d.PostId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FkBookmarksPost");

            entity.HasOne(d => d.User).WithMany(p => p.Bookmarks)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FkBookmarksUser");
        });

        modelBuilder.Entity<Comment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Comments__3214EC079274E0BE");

            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Text).HasColumnType("text");

            entity.HasOne(d => d.Post).WithMany(p => p.Comments)
                .HasForeignKey(d => d.PostId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FkCommentsPost");

            entity.HasOne(d => d.User).WithMany(p => p.Comments)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FkCommentsUser");
        });

        modelBuilder.Entity<Favorite>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Favorite__3214EC07D74026E3");

            entity.HasOne(d => d.Post).WithMany(p => p.Favorites)
                .HasForeignKey(d => d.PostId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FkFavoritesPost");

            entity.HasOne(d => d.User).WithMany(p => p.Favorites)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FkFavoritesUser");
        });

        modelBuilder.Entity<NoticeCheck>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__NoticeCh__3214EC07B3BE3410");

            entity.HasOne(d => d.Post).WithMany(p => p.NoticeChecks)
                .HasForeignKey(d => d.PostId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKNoticeChecksPost");

            entity.HasOne(d => d.User).WithMany(p => p.NoticeChecks)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKNoticeChecksUser");
        });

        modelBuilder.Entity<Post>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Posts__3214EC070D4D9543");

            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.DueDate).HasColumnType("datetime");
            entity.Property(e => e.Image)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Text).HasColumnType("text");
            entity.Property(e => e.Title)
                .HasMaxLength(100)
                .IsUnicode(false);

            entity.HasOne(d => d.User).WithMany(p => p.Posts)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FkPostsUser");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Users__3214EC071CDC7727");

            entity.HasIndex(e => e.EmployeeId, "UQ__Users__7AD04F10AF78D7B7").IsUnique();

            entity.Property(e => e.Department)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.EmployeeId)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Role)
                .HasMaxLength(255)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
