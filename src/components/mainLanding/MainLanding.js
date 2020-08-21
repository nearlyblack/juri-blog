import React from "react"
import CustomContainer from "../shared/CustomContainer"
import ArticleCard from "../shared/ArticleCard"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
const articles = [
  {
    tags: ["Tech"],
    title: "Veniam veniam magna",
    overview:
      "Labore ullamco non amet pariatur consectetur magna elit fugiat elit. Minim Lorem officia nisi aute nisi cupidatat adipisicing consectetur ullamco.",
    author: "Juri",
    length: "2 min read",
  },
  {
    tags: ["Big Dogs"],
    title: "Anim dolor dolor",
    overview:
      "Labore esse commodo cillum et. Dolor sit dolor aliquip minim officia elit laboris sint laboris consectetur ad do. Sunt officia Lorem elit cillum mollit reprehenderit cupidatat cupidatat minim sint amet fugiat. Quis nisi veniam laboris incididunt.",
    author: "Juri",
    length: "3 min read",
  },
  {
    tags: ["Tech", "Lifestyle"],
    title: "Fugiat minim Lorem ",
    overview:
      "Eiusmod tempor irure voluptate laborum veniam in ex. Id esse cupidatat laborum tempor excepteur dolor amet fugiat deserunt exercitation.",
    author: "Juri",
    length: "1 min read",
  },
  {
    tags: ["Tech", "Fashion"],
    title: "Non et non adipisicing ",
    overview:
      "Reprehenderit adipisicing amet commodo exercitation mollit officia mollit in pariatur cillum in sunt. Ad anim culpa elit aute voluptate. Aliquip dolor voluptate laborum excepteur minim pariatur qui Lorem occaecat nulla adipisicing.",
    author: "Juri",
    length: "4 min read",
  },
  {
    tags: ["Lifestyle"],
    title: "Id ut magna laborum",
    overview:
      "In ut consectetur reprehenderit quis. Enim irure sint irure velit Lorem laborum. Reprehenderit labore occaecat ad aute mollit Lorem qui et.",
    author: "Juri",
    length: "5 min read",
  },
  {
    tags: ["Tech"],
    title: "Laboris minim",
    overview:
      "Eiusmod in tempor dolor laboris veniam quis veniam amet ad. Laboris irure excepteur et pariatur. Aliquip laborum aute aute nostrud laborum enim aute commodo. Enim mollit elit sunt exercitation duis.",
    author: "Juri",
    length: "2 min read",
  },
  {
    tags: ["Tech", "Murata sucks"],
    title: "Sunt pariatur",
    overview:
      "Pariatur dolor in cupidatat aliquip fugiat minim qui ut est ad. Consectetur velit mollit pariatur magna laborum enim duis dolore reprehenderit non eiusmod. Anim est id sit fugiat in laboris duis quis. ",
    author: "Juri",
    length: "1 min read",
  },
  {
    tags: ["Tech"],
    title: "Sit laboris qui",
    overview:
      "Labore esse aliqua quis minim duis ut minim cillum aute nisi eu sunt nostrud amet. Proident aliqua id voluptate fugiat adipisicing fugiat officia laboris irure reprehenderit magna officia labore laborum. Nostrud qui fugiat do laboris dolor ad incididunt. ",
    author: "Juri",
    length: "2 min read",
  },
  {
    tags: ["Tech"],
    title: "Ea eiusmod reprehenderit",
    overview:
      "Ad tempor laborum anim labore est ex ipsum in deserunt et occaecat excepteur dolor. Ea fugiat sit ullamco eu. Non do qui in voluptate.",
    author: "Juri",
    length: "3 min read",
  },
]

function MainLanding() {
  const data = useStaticQuery(graphql`
    query PlaceholderImgQuery {
      allImageSharp(
        filter: { fluid: { originalName: { regex: "/placeholder/" } } }
      ) {
        edges {
          node {
            fluid(maxWidth: 400, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  console.log(data)
  const images = data.allImageSharp.edges
  return (
    <CustomContainer>
      <Grid container spacing={3}>
        {articles.map((el, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <ArticleCard
              article={el}
              img={images[index].node.fluid}
              key={`article-${el.title}`}
            />
          </Grid>
        ))}
      </Grid>
    </CustomContainer>
  )
}

export default MainLanding
