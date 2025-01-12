 import { Rule } from "postcss"
import {defineField,defineArrayMember} from "sanity"
  export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    defineField({
      name : "title",
      type :"string",
      title : "Post Title",
      description: "Title of the post",
       validation : (Rule) =>Rule.required(),
}),

defineField({
          name: 'name',  
          type: 'string',
          title: 'Name',
          }),
          defineField({
            name: 'image',
            type: 'image',
            title: 'Image'
        }),
    
      defineField({
        name: 'slug',
        type: 'slug',
        title: 'slug',
        options:{
          source :"title",
          maxLength :96,
          },
    }),
      
      defineField({
        name: 'summary',
        type: 'string',
        title: 'Summary',
        validation: (Rule)=>Rule.required(),
      }),
    //   defineField({
    //     name: 'image',
    //     type: 'image',
    //     title: 'Image'
    // }),
      
      defineField({
      
        name: 'description',
        type: 'text',
        title: 'description'
    }),
    
    defineField({
      name:'content',
      type : 'array',
      title :'Content',
      of:[
        defineArrayMember({
          type :'block'
        })
      ]
    }),
    
    defineField({
    
      name: 'commentsection',
      type: 'string',
      title: 'comments'
  }),
      ]
    }
    