import { format } from "date-fns";
import { Article } from "@/data/types";

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  if (article.content) {
    return (
      <div className="article-content">
        <section id="intro">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>{article.title}</strong> - {article.description}
          </p>
          <div
            className="mt-6"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </section>
      </div>
    );
  }

  return (
    <div className="article-content">
      <section id="intro">
        <p className="text-lg text-gray-700 leading-relaxed">
          <strong>{article.title}</strong> - {article.description}
        </p>

        <blockquote className="border-l-4 border-orange-600 pl-6 my-6 italic text-amber-800 bg-orange-50 p-6 rounded-r-2xl">
          இந்த கட்டுரை {article.category.nameTamil} பிரிவின் கீழ் வருகிறது.
        </blockquote>

        <section id="content">
          <h2>வரலாற்று பின்னணி</h2>
          <p>
            தமிழ்நாட்டின் கோவில்கள் ஆயிரக்கணக்கான ஆண்டுகால வரலாற்றைக் கொண்டவை.
            சோழர், பாண்டியர், பல்லவர் மற்றும் நாயக்கர் காலங்களில் கட்டப்பட்ட
            இந்த கோவில்கள் கட்டிடக்கலையின் உச்சமாக விளங்குகின்றன.
          </p>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100 my-6">
            <h4 className="font-bold text-orange-900 mb-3">கோவில் தகவல்கள்</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <strong>வகை:</strong> {article.category.nameTamil}
              </li>
              <li>
                <strong>படிக்க நேரம்:</strong> {article.readTime} நிமிடங்கள்
              </li>
              <li>
                <strong>வெளியிடப்பட்டது:</strong>{" "}
                {format(new Date(article.publishedAt), "MMMM d, yyyy")}
              </li>
            </ul>
          </div>

          <h2>கட்டிடக்கலை சிறப்புகள்</h2>
          <p>
            திராவிட கட்டிடக்கலையின் தனித்துவமான அம்சங்களான கோபுரங்கள்,
            மண்டபங்கள், விமானங்கள் மற்றும் பிரகாரங்கள் பற்றி அறிந்து கொள்வோம்.
          </p>

          <h3>முக்கிய அம்சங்கள்</h3>
          <ul>
            <li>பழமையான கட்டிடக்கலை</li>
            <li>சிற்பங்கள் மற்றும் ஓவியங்கள்</li>
            <li>புராண பின்னணி</li>
            <li>ஆன்மீக முக்கியத்துவம்</li>
          </ul>
        </section>

        <section id="conclusion">
          <h2>முடிவுரை</h2>
          <p>
            இந்த கட்டுரை உங்களுக்கு பயனுள்ளதாக இருந்திருக்கும் என நம்புகிறோம்.
            மேலும் தகவல்களுக்கு எங்கள் மற்ற கட்டுரைகளையும் படிக்கவும்.
          </p>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100 mt-8">
            <p className="text-amber-900 font-semibold text-lg text-center">
              🙏 ஓம் நமச்சிவாய 🙏
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}
