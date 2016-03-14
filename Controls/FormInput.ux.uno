public partial class FormInput {
  public string TitleUppercase {
    get { return this.Title ?? this.Title.ToUpper(); }
  }
}
