import { Repository } from "typeorm";
import { TextSample } from "../entities/text_sample.entity";
import { CreateTextSampleDto } from "../dto/text_sample.dto";


export class TextSampleService {
  constructor(private readonly textSampleRepository: Repository<TextSample>) { }

  async findTextSamples() {
    const allTextSamples = await this.textSampleRepository.find()

    return allTextSamples
  }

  async findTextSampleById(id: string) {
    const textSampleById = await this.textSampleRepository.findBy({ id: id })

    return textSampleById
  }

  async add(sample: CreateTextSampleDto) {
    const savedTextSample = await this.textSampleRepository.save(sample)

    return savedTextSample
  }

  async update(sampleId: string, sample: Partial<CreateTextSampleDto>) {
    await this.textSampleRepository.update(
      {
        id: sampleId
      }, {
      title: sample.title,
      content: sample.content,
      category: sample.category,
      difficulty_level: sample.difficulty_level,
      language: sample.language,
      source: sample.source
    })

    const updatedTextSample = await this.textSampleRepository.findOne({
      where: { id: sampleId }
    })

    return updatedTextSample
  }

  async delete(id: string) {
    const deletedSample = await this.textSampleRepository.softDelete(id)

    return deletedSample
  }


}


