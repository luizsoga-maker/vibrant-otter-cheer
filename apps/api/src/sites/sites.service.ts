async getSiteById(id: string) {
  return this.prisma.site.findUnique({ where: { id } });
}