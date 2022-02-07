package com.blind.api.domain.comment.v1.domain;

import com.blind.api.global.entity.BaseTimeEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.util.Assert;

import javax.persistence.*;

@Entity
@Getter
@Setter
@DynamicInsert
@NoArgsConstructor
public class Comment extends BaseTimeEntity {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @NotNull
    @Column(name = "board_id")
    private Long boardId;

    @JsonIgnore
    @NotNull
    @Column(name = "post_id")
    private Long postId;

    @NotNull
    @Column(name="author_id")
    private Long authorId;

    @NotNull
    @Column(name="content")
    private String content;

    @Column(name = "like_count", columnDefinition = "Integer default 0", updatable = false)
    private Long likeCnt;

    @Column(name = "is_blamed", columnDefinition = "Integer default 0", updatable = false)
    private Long blameCnt;

    @Column(name = "is_author", columnDefinition = "Boolean default false", updatable = false)
    private Boolean isAuthor;

    @Column(name = "is_del", columnDefinition = "Boolean default false", updatable = false)
    private Boolean isDel;

    @Builder
    public Comment(Long boardId, Long postId, Long authorId, String content, Boolean isAuthor) {
        Assert.notNull(boardId,"boardId must not be Null");
        Assert.notNull(postId,"postId must not be Null");
        Assert.notNull(authorId,"authorId must not be Null");
        Assert.hasText(content,"content must not be empty");

        this.boardId = boardId;
        this.postId = postId;
        this.authorId = authorId;
        this.content = content;
        this.isAuthor = isAuthor;
    }
}
