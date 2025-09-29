import { Repository } from "typeorm";
import { Badge } from "../entities/badge.entity";
import { CreateBadgeDto } from "../dto/badge.dto";
import { File } from "buffer";


export class BadgeService {
  constructor(
    private readonly badgeRepository: Repository<Badge>
  ) { }

  async fetchBadges() {
    const allBadges = await this.badgeRepository.find()
    return allBadges
  }

  async fetchBadgeById(id: string) {
    const badge = await this.badgeRepository.findOne({ where: { id: id } })
    return badge
  }

  async createBadgeWithIcon(badge: CreateBadgeDto) {
    const badgeData = this.badgeRepository.create(badge)
    return await this.badgeRepository.save(badgeData)
  }

  async updateBadge(id: string, badge: CreateBadgeDto) {
    const badgeData = await this.badgeRepository.update({
      id: id
    }, {
      name: badge.name,
      description: badge.description,
      icon_url: badge.icon_url
    })
    return badgeData
  }

  async deleteBadge(id: string) {
    const deletedBadge = await this.badgeRepository.softDelete(id)
    return deletedBadge;
  }
}