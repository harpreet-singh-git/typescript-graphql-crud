import { Movie } from "../entity/movie";
import { Resolver, Mutation, Arg, Int, Query } from "type-graphql";

@Resolver()

export class MovieResolver {
    @Mutation(() => Boolean)
    async createMovie(
        @Arg("title") title: string,
        @Arg("minutes", () => Int) minutes: number  
    ) {
        await Movie.insert({ title, minutes })
        // console.log(title);  
        return true;
    }

    @Query(()=>[Movie])
    movies(){
        return Movie.find();
    }

}
